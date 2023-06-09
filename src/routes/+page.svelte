<script>
    import Sidebar from "@/components/Sidebar.svelte";
    import Header from "@/components/Header.svelte";
    import NoFeedbackFound from "@/components/feedback/NoFeedbackFound.svelte";
    import FeedbackCard from "@/components/feedback/FeedbackCard.svelte";
    import {feedbacks} from "@/store/store.js";
</script>

<div class="container">
    <Sidebar/>
    <main>
        <Header />
        {#if $feedbacks.length > 0}
            {#each $feedbacks as feedback}
                <FeedbackCard {feedback} />
            {/each}
        {:else}
            <NoFeedbackFound />
        {/if}
    </main>
</div>

<style lang="stylus" global>
  @import "/src/styles/style.styl";
  .container
    width 1110px
    margin 0 auto
    display flex
    gap 30px
    main
      flex-grow 1
</style>
