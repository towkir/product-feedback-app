<script>
import IconArrowHr from "@/components/vectors/IconArrowHr.svelte";

export let showEditButton = false;
</script>

<div class="navigation-header">
    <button class="btn link back"><IconArrowHr />Go Back</button>
    {#if showEditButton}
    <button class="btn blue">Edit Feedback</button>
    {/if}
</div>

<style lang="stylus">
  .navigation-header
    margin-bottom 24px
    display flex
    align-items center
    justify-content space-between
    .back
      padding-left 0
      :global(svg)
        margin-right 15px
</style>
