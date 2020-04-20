<template>
  <div id="app">
    <input
      type="number"
      :value="inputSize"
      @keyup="updateSize($event.target.value)"
    />
    <TournamentBracket
      v-bind:round-list="roundList"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TournamentBracket from '@/components/TournamentBracket.vue'
import { namespace } from 'vuex-class'
import { Round } from '@/classes/round'

const bracket = namespace('Bracket')

@Component({
  components: {
    TournamentBracket
  }
})
export default class App extends Vue {
  @bracket.State
  public inputSize!: number;

  @bracket.State
  public roundList!: Round[];

  @bracket.Action
  public updateSize!: (newSize: number) => void
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
