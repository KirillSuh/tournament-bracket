<template>
  <div
    class="player"
    :class="additionalClass"
    @dragstart="onDragStart($event)"
    @dragenter="onDragEnter"
    @dragend="onDragEnd"
    :draggable="isDraggable"
  >
    <span class="player-content">{{player.name}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { BracketTreeMatchPlayer } from '@/classes/BracketTreeMatchPlayer'

const bracket = namespace('Bracket')

@Component
export default class TournamentBracketMatchPlayer extends Vue {
    @Prop() player!: BracketTreeMatchPlayer
    @Prop() additionalClass?: string
    @Prop() isDraggable!: boolean

    @bracket.Mutation
    public setDragStartPlayer!: (player: BracketTreeMatchPlayer) => void

    @bracket.Mutation
    public setDragTargetPlayer!: (player?: BracketTreeMatchPlayer) => void

    @bracket.Action
    public dragEnd!: () => void

    onDragStart (event: DragEvent): void {
      if (event.dataTransfer && this.player.id && this.player.name) {
        this.setDragStartPlayer(this.player)
        event.dataTransfer.setData('Text', this.player.name)
        event.dataTransfer.dropEffect = 'move'
      }
    }

    onDragEnter (): void {
      this.setDragTargetPlayer(this.player)
    }

    onDragEnd (): void {
      this.dragEnd()
    }
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
