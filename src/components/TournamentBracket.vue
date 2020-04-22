<template>
  <div>
    <div class="bracket-holder">
      <ul class="bracket horizontal">
        <li>
          <TournamentBracketMatchPlayer
            :name="bracketTree.winnerBracketNode.player.name"
            :additional-class="{'double-elimination-winners-final': isDoubleElimination}"
          />
          <TournamentBracketMatch :match="bracketTree.winnerBracketNode.childMatch"/>
        </li>
      </ul>
    </div>
    <div class="bracket-holder" v-if="isDoubleElimination">
      <ul class="bracket horizontal">
        <li>
          <TournamentBracketMatchPlayer
            :name="bracketTree.loserBracketNode.player.name"
            :additional-class="{'double-elimination-losers-final': isDoubleElimination}"
          />
          <TournamentBracketMatch :match="bracketTree.loserBracketNode.childMatch" :is-loser-bracket="true"/>
        </li>
      </ul>
      <TournamentBracketMatchPlayer
        name="winner of winners"
        additional-class="double-elimination-winner"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { BracketTree } from '@/classes/BracketTree'
import TournamentBracketMatch from '@/components/TournamentBracketMatch.vue'
import TournamentBracketMatchPlayer from '@/components/TournamentBracketMatchPlayer.vue'
@Component({
  components: { TournamentBracketMatchPlayer, TournamentBracketMatch }
})
export default class TournamentBracket extends Vue {
  @Prop() readonly bracketTree!: BracketTree[]
  @Prop() readonly isDoubleElimination!: boolean
}
</script>

<style lang="scss">
  $border-color: #005050;
  $border-weight: 2px;
  $margin: 12px;
  .bracket-holder {
    display: flex;
  }
  .bracket {
    margin: 0;
    padding: 0;

    &:not(:empty):before, &:not(:empty):after,
    ul:not(:empty):before, ul:not(:empty):after,
    li:not(:empty):before, li:not(:empty):after {
      display: block;
      position: absolute;
      content: "";
    }

    ul, li {
      position: relative;
      margin: 0;
      padding: 0;
    }

    li {
      list-style: none;
    }

    &.horizontal {
      li {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        margin-right: $margin * 2;

        div {
          margin:$margin/2 0;
        }

        &:before {
          border-left: $border-weight solid $border-color;
          height: 100%;
          width: 0;
          right: -$margin;
        }

        &:first-child:before {
          display: flex;
          flex-direction: row-reverse;
          position: absolute;
          height: 50%;
          top: 50%;
        }

        &:last-child:before {
          height: 50%;
          bottom: 50%;
          top: auto;
        }

        &:after, ul:after {
          border-top: $border-weight solid $border-color;
          height: 0;
          width: $margin;
          top: 50%;
          right: -$margin;
        }

        ul:after {
          right: 0;
        }

        &:only-child:before {
          content: none;
        }
      }

      &>li {
        &:only-child {
          margin-left: 0;
        }

        &:only-child:before, &:only-child:after {
          content: none;
        }
      }
    }
  }
  .double-elimination-winner {
    position: relative;
    top: -$margin * 2;
  }
  .double-elimination-winner::before {
    content: '';
    position: absolute;
    border-top: 2px solid #005050;
    height: 0;
    width: $margin;
    left: -$margin;
    top: 50%;
  }
  .double-elimination-winners-final::after {
    content: '';
    position: absolute;
    border-top: $border-weight solid $border-color;
    border-right: $border-weight solid $border-color;
    top: 50%;
    height: 50%;
    width: $margin;
    right: -$margin;
  }
  .double-elimination-losers-final::after {
    content: '';
    position: absolute;
    border-bottom: $border-weight solid $border-color;
    border-right: $border-weight solid $border-color;
    top: 0;
    height: 50%;
    width: $margin + 1;
    right: -$margin - 1;
  }
</style>
