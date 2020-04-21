<template>
  <div class="bracket-holder">
    <ul class="bracket horizontal">
      <li>
        <div>
          <span>{{bracketTree.rootNode.player}}</span>
        </div>
        <TournamentBracketMatch :match="bracketTree.rootNode.childMatch"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { BracketTree } from '@/classes/BracketTree'
import TournamentBracketMatch from '@/components/TournamentBracketMatch.vue'
@Component({
  components: { TournamentBracketMatch }
})
export default class TournamentBracket extends Vue {
  @Prop() readonly bracketTree!: BracketTree[]
}
</script>

<style lang="scss">
  .bracket-holder {
    display: flex;
  }
  .bracket {
    $border-color: #005050;
    $border-weight: 2px;
    $margin: 12px;

    margin: $margin * 1.5;
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
</style>
