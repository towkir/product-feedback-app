<script>
    import IconArrowHr from "@/components/vectors/IconArrowHr.svelte";
    import FeedbackCard from "@/components/feedback/FeedbackCard.svelte";
    import { navigateToFeedbackCreatePage } from "@/scripts/commonActions.js";
    import { statuses, feedbacks } from "@/store/store.js";
    const filteredStatuses = $statuses.filter(item => item.visible === true);

    function feedbacksOfStatus(status) {
        return $feedbacks.filter(item => item.status === status);
    }
    function feedbackCount(name) {
        return feedbacksOfStatus(name).length;
    }
</script>

<div class="container">
    <nav>
        <div class="left">
            <a class="btn link" href="/"><IconArrowHr />Go Back</a>
            <h1>Roadmap</h1>
        </div>
        <div class="right">
            <button class="btn primary" on:click={() => navigateToFeedbackCreatePage()}>+ Add Feedback</button>
        </div>
    </nav>
    <div class="roadmap-header">
        {#each filteredStatuses as status}
            <div class="column">
                <h5>{status.name} ({feedbackCount(status.name)})</h5>
                <p>{status.description}</p>
            </div>
        {/each}
    </div>
    <div class="roadmap-board">
        {#each filteredStatuses as status}
            <div class="column">
                {#each feedbacksOfStatus(status.name) as feedback}
                    <FeedbackCard {feedback} view="grid" statusColor="{status.color}"/>
                {/each}
            </div>
        {/each}
    </div>
</div>

<style lang="stylus">
  .container
    width 1110px
    margin 0 auto
    nav
      display flex
      align-items center
      justify-content space-between
      color brand-white
      background-color brand-navy
      padding 27px 32px
      border-radius 10px
      margin-bottom 40px
      .left
        .btn.link
          padding 0
          margin-bottom 5px
          color inherit
          :global(svg)
            margin-right 15px
          :global(svg path)
            stroke brand-white
    .roadmap-header
      display flex
      gap 30px
      margin-bottom 30px
      .column
        flex-grow 1
        flex-shrink 1
        flex-basis 0
        h5
          heading-3()
          color brand-light-navy
        p
          body-1()
          color brand-lighter-navy
    .roadmap-board
      display flex
      gap 30px
      .column
        flex-grow 1
        flex-shrink 1
        flex-basis 0
</style>
