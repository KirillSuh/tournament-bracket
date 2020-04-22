<template>
  <ul v-bind:class="{ 'loser-bracket': isLoserBracket }">
    <li>
      <TournamentBracketMatchPlayer :name="match.playerList[0].name" :id="match.playerList[0].id"/>
      <template v-if="match.childMatches && match.childMatches[0]">
        <TournamentBracketMatch :match="match.childMatches[0]"/>
      </template>
    </li>
    <li>
      <TournamentBracketMatchPlayer :name="match.playerList[1].name" :id="match.playerList[1].id"/>
      <template v-if="match.childMatches && match.childMatches[1]">
        <TournamentBracketMatch :match="match.childMatches[1]"/>
      </template>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { BracketTreeMatch } from '@/classes/BracketTreeMatch'
import TournamentBracketMatchPlayer from '@/components/TournamentBracketMatchPlayer.vue'
@Component({
  components: { TournamentBracketMatchPlayer }
})
export default class TournamentBracketMatch extends Vue {
  @Prop() match!: BracketTreeMatch
  @Prop() isLoserBracket!: boolean
}
</script>

<style lang="scss">
  .loser-bracket {
    margin-left: 165px !important;
  }
</style>
