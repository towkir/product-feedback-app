<script>
import {goto} from "$app/navigation";
import {page} from "$app/stores";
import IconArrowHr from "@/components/vectors/IconArrowHr.svelte";

export let showEditButton = false;

function goBack() {
    goto('/');
}
function navigateToFeedbackEditPage() {
    goto(`/feedback/edit/${$page.params.slug}`)
}
</script>

<div class="navigation-header">
    <button class="btn link back" on:click={() => goBack()}><IconArrowHr />Go Back</button>
    {#if showEditButton}
    <button class="btn blue" on:click={() => navigateToFeedbackEditPage()}>Edit Feedback</button>
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
