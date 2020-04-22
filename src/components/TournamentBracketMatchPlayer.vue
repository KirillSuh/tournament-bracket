<template>
  <div
    class="player"
    :class="additionalClass"
  >
    <span class="player-content">{{name}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component
export default class TournamentBracketMatchPlayer extends Vue {
    @Prop() name!: string
    @Prop() additionalClass?: string
    @Prop() id?: number
}
</script>

<style lang="scss">
  $player-width : 140px;
  .player {
    background: #002828;
    border: 1px solid #003232;
    font-size: .875rem;
    width: $player-width;
    height: 30px;
    display: inline-block;
  }
  .player-content {
    color: white;
    line-height: 30px;
  }
</style>
