<template>
  <div
    id="charts"
    class="line-controls"
  >
    <div class="dropdown">
      <label for="sel_country">select country</label>
      <select
        id="sel_country"
        name="sel_country"
      >
        <option
          selected
          disabled
          value=""
        >
          Select Country
        </option>
      </select>
      <button @click="changeCountry_Route">
        GO!
      </button>
    </div>
    <div
      ref="linebuttons"
      class="line-buttons"
      @click="changeIndicator_Subroute"
    >
      <button
        v-for="(item, index) in indicators"
        :key="index"
        :value="item.toLowerCase()"
        :class="{ lineSelected: item.toLowerCase() === indicator }"
      >
        {{ item }}
      </button>
    </div>
    <p>
      <a
        class="newwindow"
        rel="noopener noreferrer"
        target="_blank"
        href="https://data.worldbank.org/"
      >world bank data</a>&nbsp;&nbsp;<span :style="spanCols">{{ loadingOrCountry }}</span>
    </p>
  </div>
</template>

<script>
import countries from '@/assets/iso2countries';

export default {
  name: 'LineChartControls',
  props: {
    country: {
      type: String,
      default: '',
    },
    indicator: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selectedIndicatorIndex: 0,
      indicators: [
        'GDP',
        'Population',
        'Regulation',
        'Tax',
      ],
    };
  },
  computed: {
    spanCols() {
      return {
        color: this.$store.state.loading ? 'red' : '#111775',
      };
    },
    loadingOrCountry() {
      if (this.$store.state.loading) {
        return 'Loading...';
      }
      return ` for: ${this.country.replace(/-/g, ' ')}`;
    },
  },
  watch: {
    $route(to) {
      const buttonToFocus = [...this.$refs.linebuttons.children]
        .filter((x) => x.value === to.params.indicator)[0];
      if (buttonToFocus !== document.activeElement) {
        buttonToFocus.focus();
      }
    },
  },
  mounted() {
    for (let i = 0; i < countries.length; i += 1) {
      const opt = document.createElement('option');
      opt.textContent = `${countries[i].country}`;
      document.querySelector('select').appendChild(opt);
    }
  },
  methods: {
    changeCountry_Route() {
      const country = document.querySelector('select').value;
      this.$router.push(`/${country}`.toLowerCase().replace(/ /g, '-'));
    },
    changeIndicator_Subroute(e) {
      const subroute = e.target.innerText.toLowerCase().trim();
      this.$router.push(`/${this.country}/${subroute}`);
    },
  },
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:800i');
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:300');
  .line-controls{
    margin-top: 2em;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 70px 34px;
    grid-template-areas: "drop" "line" "para";
  }
  .dropdown{
    grid-area: drop;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .line-buttons{
    display: flex;
    align-self: center;
    grid-area: line;
  }
  p{
    grid-area: para;
    font-family: 'Alegreya Sans', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
  }
  span{
    font-family: 'Alegreya Sans SC', sans-serif;
    font-weight: 800;
    font-style: italic;
    text-transform: none;
  }
  a{
    text-decoration: underline;
  }
  button{
    font-family: 'Alegreya Sans SC', sans-serif;
    font-weight: 800;
    font-style: italic;
    padding: 4px 10px;
    font-size: 16px;
    border: none;
  }
  button:hover{
    cursor: pointer;
  }
  button:not(.lineSelected){
    color: #676666;
    background-color: transparent;
  }
  button:focus{
    outline: 2px solid #7377bf;
  }
  select + button{
    border-style: outset;
    border-radius: 20px;
    border-color: #d81420;
  }
  label{
    width: 1px;
    height: 1px;
    color: transparent;
    display: block;
  }
  .newwindow::after{
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url('../assets/newwindow.png') 0 0 no-repeat;
  }
  .lineSelected{
    color: #111775;
    background-color: #81C98F;
    padding: 2px 10px;
    border-radius: 50px;
  }
  select{
    outline: none;
    width: 250px;
    height: 50px;
    background: url(../assets/downArrow.jpg) no-repeat 100%;
    font-size: 17px;
    font-family: 'Alegreya Sans', sans-serif;
    font-weight: 300;
    background-color: #fbfbfb;
    box-shadow: 0 0 0 1px #cecece;
    border: 3px solid transparent;
    border-radius: 5px;
    padding: 0.75em 0.5em;
    appearance: none;
    transition: border 0.7s ease-out;
  }
  select:focus{
    outline: 2px solid #7377bf;
  }
  select:required:invalid{
    color: #b9b9b9;
  }
  option[value=""][disabled]{
    display: none;
  }
  option{
    color: #676666;
  }
  #charts:target{
    padding-top: 41px;
  }
  @media screen and (min-width: 400px){
    .dropdown{
      flex-direction: row;
      align-items: center;
      width: 310px;
    }
    .line-controls{
      grid-template-rows: 60px 54px 50px;
    }
    p{
      align-self: center;
    }
  }
  @media screen and (min-width: 768px){
    .line-controls{
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 70px 40px;
      grid-template-areas: "drop line" "para para";
    }
    p{
      justify-self: auto;
    }
  }
</style>
