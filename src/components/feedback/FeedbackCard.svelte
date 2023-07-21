<script>
    import {goto} from "$app/navigation";
    import {feedbacks, comments} from "@/store/store.js";
    import IconArrowUp from "@/components/vectors/IconArrowVr.svelte";
    import IconChatBubble from "@/components/vectors/IconChatBubble.svelte";

    export let feedback;
    export let clickable = true;
    export let view = 'list';
    export let statusColor = '';
    function navigateToDetailsPage(id) {
        if (clickable) {
            goto(`/feedback/view/${id}`)
        }
    }
    function addOrRemoveUpvote() {
        const adjustVotesBy = feedback.voted ? -1 : +1;
        feedback.upvotes += adjustVotesBy;
        feedback.voted = !feedback.voted;
        let currentFeedbackIndex = $feedbacks.findIndex((item) => item.id === feedback.id);
        $feedbacks.splice(currentFeedbackIndex, 1, feedback)
        feedbacks.set($feedbacks);
    }

    $: commentsInThisFeedback = $comments.filter((item) => item.feedbackId === feedback.id);
</script>

<div class="feedback-card {view}" on:click={() => navigateToDetailsPage(feedback.id)}>
    <div class="votes-and-comments">
        <div class="votes" class:active="{feedback.voted}" on:click|stopPropagation={() => addOrRemoveUpvote()}>
            <IconArrowUp />
            <span class="vote-count">{feedback.upvotes}</span>
        </div>
        <div class="comments">
            <IconChatBubble />
            <span class="comment-count">{commentsInThisFeedback.length}</span>
        </div>
    </div>
    <div class="contents">
        <div class="details">
            <h3>{feedback.title}</h3>
            <p>{feedback.description}</p>
            <span class="tag" on:click|stopPropagation={() => {}}>{feedback.category}</span>
        </div>
        <div class="comments-and-votes">
            <div class="comments">
                <IconChatBubble />
                <span class="comment-count">{commentsInThisFeedback.length}</span>
            </div>
            <div class="votes" class:active="{feedback.voted}" on:click|stopPropagation={() => addOrRemoveUpvote()}>
                <IconArrowUp />
                <span class="vote-count">{feedback.upvotes}</span>
            </div>
        </div>
    </div>
    {#if (view === 'grid' && statusColor)}
        <div class="status-tag">
            <span class="tag-badge" style="background-color: {statusColor}"></span>{feedback.status}
        </div>
        <div class="status-ribbon" style="background-color: {statusColor}"></div>
    {/if}
</div>

<style lang="stylus">
  .feedback-card
    background-color brand-white
    padding 28px 32px
    margin-bottom 20px
    border-radius 10px
    display flex
    align-items flex-start
    gap 40px
    cursor pointer
    position relative
    user-select none
    -webkit-tap-highlight-color transparent
    &.grid
      flex-direction column-reverse
      gap 18px
      border-radius 5px
      overflow hidden
      .votes-and-comments
        width 100%
        display flex
        align-items center
        justify-content space-between
        .votes
          padding 8px 12px
          flex-direction row
        .comments
          display flex
      .contents
        .comments-and-votes
          .comments
            display none
      .status-tag
        display block

    &:hover
      .contents
        .details
          h3
            color brand-blue

    .votes-and-comments
      .comments
        display none
    .votes
      background-color brand-grey
      padding 12px 9px 8px 9px
      border-radius 10px
      box-sizing border-box
      min-width 40px
      display flex
      flex-direction column
      align-items center
      gap 8px
      cursor pointer
      transition background-color 0.3s ease-in-out

      &.active
        background-color brand-blue

        :global(svg path)
          stroke brand-white

        span
          color brand-white

      &:not(.active):hover
        background-color brand-light-blue

      :global(svg path)
        stroke brand-blue

      span
        body-3()
        color brand-light-navy

    .contents
      flex-grow 1
      display flex
      align-items center
      justify-content space-between

      .details
        h3
          heading-3()
          color brand-light-navy
          margin-bottom 4px
          transition color 0.3s ease-in-out

        p
          body-1()
          color brand-lighter-navy
          margin-bottom 12px

        :global(span.tag)
          margin 0

      .comments-and-votes
        .votes
          display none
    .comments
      display flex
      align-items center

      .comment-count
        heading-3()
        color brand-light-navy
        margin-left 8px
    .status-tag
      display none
      body-1()
      color brand-lighter-navy
      position relative
      padding-left 20px
      .tag-badge
        position absolute
        left 0
        top calc(50% - 4px)
        display inline-block
        width 8px
        height 8px
        border-radius 8px
    .status-ribbon
      display block
      height 6px
      width 100%
      position absolute
      top 0
      left 0
      background-color red
  @media screen and (max-width: 768px)
    .feedback-card
      &.grid
        padding 24px

  @media screen and (max-width: 570px)
    .feedback-card
      flex-direction column-reverse
      gap 18px
      padding 24px
      .votes-and-comments
        width 100%
        display flex
        align-items center
        justify-content space-between
        .votes
          padding 8px 12px
          flex-direction row
        .comments
          display flex
      .contents
        .comments-and-votes
          .comments
            display none
      .status-tag
        display block
</style>
