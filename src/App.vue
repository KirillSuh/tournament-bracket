<template>
  <div id="app">
    <input
      type="number"
      :value="inputSize"
      @keyup="updateSize($event.target.value)"
    />
    <TournamentBracket
      v-bind:size="bracketSize"
      v-bind:matches="matches"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TournamentBracket from '@/components/TournamentBracket.vue'
import { namespace } from 'vuex-class'
import { Match } from '@/store/modules/match'
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
  public bracketSize!: number;

  @bracket.State
  public matches!: Match[];

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
