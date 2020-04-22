<template>
  <div id="app">
    <input
      type="number"
      :value="inputSize"
      @keyup="updateSize($event.target.value)"
    />
    <input
      type="checkbox"
      :value="isDoubleElimination"
      @click="updateIsDoubleElimination($event.target.checked)"
    />
    {{doubleEliminationString}}
    <input
      type="button"
      @click="randomizePlayers"
      value="Randomize"
    />
    <TournamentBracket :bracket-tree="bracketTree" :is-double-elimination="isDoubleElimination"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TournamentBracket from '@/components/TournamentBracket.vue'
import { namespace } from 'vuex-class'
import { BracketTree } from '@/classes/BracketTree'
import TournamentBracketMatch from '@/components/TournamentBracketMatch.vue'

const bracket = namespace('Bracket')

@Component({
  components: {
    TournamentBracketMatch,
    TournamentBracket
  }
})
export default class App extends Vue {
  @bracket.State
  public inputSize!: number;

  @bracket.State
  public bracketTree!: BracketTree;

  @bracket.State
  public isDoubleElimination!: boolean;

  @bracket.Action
  public updateSize!: (newSize: number) => void

  @bracket.Action
  public updateIsDoubleElimination!: (value: boolean) => void

  @bracket.Action
  public randomizePlayers!: () => void

  get doubleEliminationString (): string {
    return this.isDoubleElimination ? 'DoubleElimination' : 'SingleElimination'
  }
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
