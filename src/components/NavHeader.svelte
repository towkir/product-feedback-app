<script>
    import {afterNavigate, goto} from "$app/navigation";
    import {page} from "$app/stores";
    import IconArrowHr from "@/components/vectors/IconArrowHr.svelte";

    export let showEditButton = false;

    let returnTo = '/';

    function goBack() {
        goto(returnTo);
    }
    function navigateToFeedbackEditPage() {
        goto(`/feedback/edit/${$page.params.slug}`)
    }

    afterNavigate((navigation) => {
        if (navigation.to.route.id.includes('/edit/')) {
            returnTo = `/feedback/view/${$page.params.slug}`;
        }
        if (navigation.from) {
            const routeId = navigation.from.route.id;
            if (routeId === '/' || routeId === '/roadmap') {
                returnTo = routeId;
            }
        }
    });
</script>

<div class="navigation-header" class:spaced={!showEditButton}>
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
    &.spaced
      margin-bottom 60px
    .back
      padding-left 0
      :global(svg)
        margin-right 15px
</style>
