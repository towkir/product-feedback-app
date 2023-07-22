<script>
    import IconArrowHr from "@/components/vectors/IconArrowHr.svelte";
    import FeedbackCard from "@/components/feedback/FeedbackCard.svelte";
    import { navigateToFeedbackCreatePage } from "@/scripts/commonActions.js";
    import { statuses, feedbacks } from "@/store/store.js";
    const filteredStatuses = $statuses.filter(item => item.visible === true);

    let activeColumn = 'In-Progress';

    function setActiveColumn(status) {
        activeColumn = status;
    }
    function feedbacksOfStatus(status) {
        return $feedbacks.filter(item => item.status === status);
    }
    function feedbackCount(name) {
        return feedbacksOfStatus(name).length;
    }
</script>

<div class="container" role="main">
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
            <div
                class="column"
                class:active={activeColumn === status.name}
                on:click={() => setActiveColumn(status.name)}
                style="{activeColumn === status.name ? `border-bottom-color: ${status.color}` : ''}"
            >
                <h5>{status.name} ({feedbackCount(status.name)})</h5>
                <p>{status.description}</p>
            </div>
        {/each}
    </div>
    <div class="roadmap-board">
        {#each filteredStatuses as status}
            <div class="column" class:active={activeColumn === status.name}>
                <div class="column-header">
                    <h3>{status.name} ({feedbackCount(status.name)})</h3>
                    <p>{status.description}</p>
                </div>
                {#each feedbacksOfStatus(status.name) as feedback}
                    <FeedbackCard {feedback} view="grid" statusColor="{status.color}"/>
                {/each}
            </div>
        {/each}
    </div>
</div>

<style lang="stylus">
  .container
    width calc(100% - 80px)
    max-width 1110px
    margin 80px auto
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
        h1
          heading-1()
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
        .column-header
          display none
        flex-grow 1
        flex-shrink 1
        flex-basis 0
  @media screen and (max-width: 768px)
    .container
      margin 56px auto
      .roadmap-board
        gap 10px
  @media screen and (max-width: 690px)
    .container
      width 100%
      margin 0
      padding-top 107px
      nav
        position fixed
        top 0
        left 0
        width 100%
        border-radius 0
        margin-bottom 0
        box-sizing border-box
        padding 30px 24px
        z-index 5
      .roadmap-header
        background-color brand-grey
        position sticky
        z-index 10
        top 107px
        gap 0
        margin-bottom 0
        border-bottom 1px solid brand-light-blue
        .column
          padding 20px 6px 16px
          text-align center
          border-bottom 4px solid transparent
          &:not(.active)
            opacity 0.4
          p
            display none
      .roadmap-board
        padding 24px
        .column
          .column-header
            display block
            margin-bottom 24px
            h3
              heading-1()
              color brand-light-navy
            p
              body-1()
              color brand-lighter-navy
        .column:not(.active)
          display none
</style>
