<template>
    <div>
      Current bracket count: {{size}}
      matches: {{matches}}
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Match } from '@/store/modules/match'

@Component
export default class TournamentBracket extends Vue {
  @Prop() readonly size!: number
  @Prop() readonly matches!: Match[]
}
</script>

<style scoped>

</style>
