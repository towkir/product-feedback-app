<script>
    import {onMount} from "svelte";
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
    function clearOverflow() { // applied from homepage in mobile view;
        if (document.body.hasAttribute('style')) {
            document.body.removeAttribute('style');
        }
    }

    onMount(() => {
        clearOverflow();
    })
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
            <div
                class="column"
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
      nav
        border-radius 0
        margin-bottom 8px
      .roadmap-header
        gap 0
        margin-bottom 0
        .column
          padding 16px 6px
          text-align center
          border-bottom 4px solid transparent
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
