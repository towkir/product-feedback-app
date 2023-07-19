<script>
    import MessageCreateCard from "@/components/comments/MessageCreateCard.svelte";

    export let role = 'comment'; // or 'reply'
    export let message = {};
    export let replies = [];
    export let isLastItem = false;

    let writeModeOn = false;

    $: hasNoReplies = role === 'comment' && replies.length === 0;
    $: hasReplies = role === 'comment' && replies.length > 0;
    $: isLastReply = role === 'reply' && isLastItem;
    function toggleWriteMode() {
        writeModeOn = !writeModeOn;
    }
    function turnOffWriteMode() {
        writeModeOn = false;
    }
</script>

<div
    class="message {role}"
    class:no-replies="{hasNoReplies}"
    class:has-replies={hasReplies}
    class:last="{isLastReply}"
>
    <div class="comments-and-replies">
        <div class="avatar">
            <img src="{message.user.image}" alt="photo of {message.user.name}">
        </div>
        <div class="content">
            <div class="user-and-action">
                <div class="user">
                    <h5>{message.user.name}</h5>
                    <p>{`@${message.user.username}`}</p>
                </div>
                <span class="action" on:click={() => toggleWriteMode()}>{writeModeOn ? 'Cancel' : 'Reply'}</span>
            </div>
            <p class="message-content">
                {#if message.replyingTo}
                    <span>{`@${message.replyingTo}`}</span>
                {/if}
                {message.content}
            </p>
        </div>
    </div>
    {#if writeModeOn}
        <MessageCreateCard
            role="reply"
            commentId="{role === 'comment' ? message.id : message.commentId}"
            replyingTo="{message.user.username}"
            on:reply={() => turnOffWriteMode()}
        />
    {/if}
</div>

<style lang="stylus">
  .message
    position relative
    margin-bottom 32px
    &:last-child
      margin-bottom 16px
    &.reply
      margin-left 45px
      &:before
        content ''
        position absolute
        top -32px
        left -24px
        width 1px
        height calc(100% + 32px)
        background-color brand-grey
      &.last:before
        height 55px
      &.last:not(:last-child)
        padding-bottom 32px
        border-bottom 1px solid brand-grey
    &.comment.no-replies:not(:last-child)
      padding-bottom 32px
      border-bottom 1px solid brand-grey
    &.comment.has-replies
      &:before
        content ''
        position absolute
        top 63px
        left 21px
        width 1px
        height 100%
        background-color brand-grey
    .comments-and-replies
      display flex
      gap 32px
      .avatar
        width 40px
        height 40px
        border-radius 40px
        overflow hidden
        flex 0 0 40px
        img
          width 100%
          height 100%
          object-fit cover
      .content
        flex-grow 1
        .user-and-action
          display flex
          align-items center
          justify-content space-between
          margin-bottom 17px
          .user
            h5
              heading-4()
              color brand-light-navy
            p
              body-4()
              color brand-lighter-navy
          .action
            body-3()
            color brand-blue
            text-decoration underline
            cursor pointer
        p.message-content
          body-2()
          color brand-lighter-navy
          span
            color brand-purple
            font-weight 700
            cursor pointer
</style>
