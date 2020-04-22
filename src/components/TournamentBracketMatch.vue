<template>
  <ul v-bind:class="{ 'loser-bracket': isLoserBracket }">
    <li>
      <TournamentBracketMatchPlayer
        :player="match.playerList[0]"
        :is-draggable="isDraggable"
      />
      <template v-if="match.childMatches && match.childMatches[0]">
        <TournamentBracketMatch :match="match.childMatches[0]"/>
      </template>
    </li>
    <li>
      <TournamentBracketMatchPlayer
        :player="match.playerList[1]"
        :is-draggable="isDraggable"
      />
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

  get isDraggable (): boolean {
    return this.match.round === 1
  }
}
</script>

<style lang="scss">
  .loser-bracket {
    margin-left: 165px !important;
  }
</style>
