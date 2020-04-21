<template>
  <ul>
    <li>
      <div class="player">
        <span class="player-content">{{match.playerList[0]}}</span>
      </div>
      <template v-if="match.childMatches && match.childMatches[0]">
        <TournamentBracketMatch :match="match.childMatches[0]"/>
      </template>
    </li>
    <li>
      <div class="player">
        <span class="player-content">{{match.playerList[1]}}</span>
      </div>
      <template v-if="match.childMatches && match.childMatches[1]">
        <TournamentBracketMatch :match="match.childMatches[1]"/>
      </template>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { BracketTreeMatch } from '@/classes/BracketTreeMatch'

@Component
export default class TournamentBracketMatch extends Vue {
    @Prop() match!: BracketTreeMatch
}
</script>

<style scoped>
  .player {
    background: #002828;
    border: 1px solid #003232;
    font-size: .875rem;
    width: 140px;
    height: 30px;
    display: inline-block;
  }
  .player-content {
    color: white;
    line-height: 30px;
  }
</style>
