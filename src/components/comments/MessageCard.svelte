<script>
    export let role = 'comment'; // or 'reply'
    export let message = {};
    export let replies = [];
    export let isLastItem = false;

    function hasNoReplies() {
        return role === 'comment' && replies.length === 0;
    }
    function hasReplies() {
        return role === 'comment' && replies.length > 0;
    }
    function isLastReply() {
        return role === 'reply' && isLastItem;
    }
</script>

<div
    class="message {role}"
    class:no-replies="{hasNoReplies()}"
    class:has-replies={hasReplies()}
    class:last="{isLastReply()}"
>
    <div class="avatar">
        <img src="{message.user.image}" alt="photo of {message.user.name}">
    </div>
    <div class="content">
        <div class="user">
            <h5>{message.user.name}</h5>
            <p>{`@${message.user.username}`}</p>
        </div>
        <p class="message-content">{message.content}</p>
    </div>
</div>

<style lang="stylus">
  .message
    display flex
    position relative
    gap 32px
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
      &:not(:last-child)
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
      .user
        margin-bottom 17px
        h5
          heading-4()
          color brand-light-navy
        p
          body-4()
          color brand-lighter-navy
      p.message-content
        body-2()
        color brand-lighter-navy
</style>
