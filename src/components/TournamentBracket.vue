<template>
  <div class="tournament-brackets">
    <div class="bracket">
      <template v-for="(round, index) in roundList">
        <div class="round" :key="index" :class="['round-' + round.number]">
          <template v-for="(match, matchIndex) in round.matchList">
            <div class="match" :key="matchIndex">
              <div class="first-player match__content match-style">{{match.playerList[0]}}</div>
              <div class="second-player match__content match-style">{{match.playerList[1]}}</div>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Round } from '@/classes/round'

@Component
export default class TournamentBracket extends Vue {
  @Prop() readonly size!: number
  @Prop() readonly roundList!: Round[]
  @Prop() readonly matchStyle: object = () => ({

  })
}
</script>

<style scoped>
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  .bracket {
    display: flex;
  }
  .round {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }
  .round:first-child .match::before {
    display: none;
  }
  .round:first-child .match__content::before {
    display: none;
  }
  .round:last-child .match::after {
    display: none;
  }

  .match {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    margin: 0 10px;
    padding: 6px 0;
    position: relative;
  }

  .match::before {
    content: "";
    display: block;
    min-height: 20%;
    border-left: 2px solid purple;
    position: absolute;
    left: -8px;
    top: 30%;
    margin-top: -15px;
    margin-left: -2px;
  }

  .match::after {
    content: "";
    display: block;
    min-height: 20%;
    border-left: 2px solid purple;
    position: absolute;
    left: 10px;
    top: -30%;
    margin-top: -15px;
    margin-left: -2px;
  }

  .first-player::after {
    content: "";
    display: block;
    border: 2px solid transparent;
    border-top-color: purple;
    border-right-color: purple;
    height: 60%;
    position: absolute;
    right: -6px;
    width: 6px;
    top: 50%;
  }
  .second-player::after {
    content: "";
    display: block;
    border: 2px solid transparent;
    border-bottom-color: purple;
    border-right-color: purple;
    height: 60%;
    position: absolute;
    right: -6px;
    width: 6px;
    bottom: 50%;
  }
  .match__content::before {
    content: "";
    display: block;
    width: 10px;
    border-bottom: 2px solid purple;
    margin-left: -2px;
    position: absolute;
    top: 50%;
    left: -10px;
  }

  .match-style {
    border: 2px solid green;
    width: 100%;
    height: 30px;
    position: relative;
  }
</style>
