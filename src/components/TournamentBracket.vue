<template>
  <div class="tournament-brackets">
    <div class="bracket">
      <template v-for="(round, index) in roundList">
        <div class="round" :key="index" :class="['round-' + round.number]">
          <template v-for="(match, matchIndex) in round.matchList">
            <div class="match" :key="matchIndex">
              <div class="first-player player">
                <span class="player-content">{{match.playerList[0]}}</span>
              </div>
              <div class="second-player player">
                <span class="player-content">{{match.playerList[1]}}</span>
              </div>
            </div>
          </template>
        </div>
      </template>
      <div class="round" :key="['winner-round']">
        <div class="match" :key="['winner-match']">
          <div class="player">
            <span class="player-content">winner</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Round } from '@/classes/round'

@Component
export default class TournamentBracket extends Vue {
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
  .round:last-child .match::after {
    display: none;
  }
  .round:first-child .match .player::before {
    display: none;
  }
  .player {
    background: #002828;
    border: 1px solid #003232;
    font-size: .875rem;
    width: 100%;
    height: 30px;
    position: relative;
  }
  .player::before {
    content: "";
    display: block;
    width: 10px;
    border-bottom: 2px solid #005050;
    margin-left: -2px;
    position: absolute;
    top: 50%;
    left: -9px;
  }
  .first-player {
    margin-bottom: 5px;
  }
  .second-player {
    margin-top: 5px;
  }
  .match {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-grow: 1;
    margin: 0 10px;
    padding: 6px 0;
    position: relative;
  }
  .match::after {
    content: "";
    display: block;
    width: 10px;
    height: 50%;
    right: -10px;
    border-color: #005050;
    border-style: solid;
    border-width: 2px 2px 2px 0;
    position: absolute;
  }
  .player-content {
    color: white;
    line-height: 30px;
  }
</style>
