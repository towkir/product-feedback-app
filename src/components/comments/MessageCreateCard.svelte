<script>
    import {comments, replies, currentUser} from "@/store/store.js";
    import {singularOrPlural, capitalizeFirstChar, findNextValidId} from "@/scripts/helper.js";

    export let role = 'comment'; // or 'reply'
    export let feedbackId;
    export let commentId;
    export let replyingTo;
    const characterLimit = 250;
    let message = '';

    function postComment() {
        const listOfIds = $comments.map(item => item.id);
        const newCommentId = findNextValidId(listOfIds);
        const comment = {
            id: newCommentId,
            feedbackId,
            content: message,
            user: $currentUser,
        };
        comments.update((list) => {
            list.push(comment);
            return list;
        });
    }
    function postReply() {
        const listOfIds = $replies.map(item => item.id);
        const newReplyId = findNextValidId(listOfIds);
        const reply = {
            id: newReplyId,
            commentId,
            content: message,
            replyingTo,
            user: $currentUser,
        };
        replies.update((list) => {
            list.push(reply);
            return list;
        });
    }
    function postMessage() {
        if (role === 'comment') {
            postComment();
        } else {
            postReply();
        }
        message = '';
    }
    $: remainingCharacter = message.length <= characterLimit ? characterLimit - message.length : 0;
    $: disableButton = (message.length > characterLimit) || null
</script>

<div class="message {role}">
    <!-- svelte-ignore a11y-autofocus -->
    <textarea
        bind:value={message}
        class="input"
        autofocus
        class:error={message.length > characterLimit}
        placeholder="Type your {role} here"></textarea>
    <span class="status">
        {#if role === 'comment'}
            {singularOrPlural(remainingCharacter, 'character', 'characters')} left
        {:else}
            {message.length} / {characterLimit}
        {/if}
    </span>
    <button
        disabled="{disableButton}"
        class="btn primary"
        on:click={() => postMessage()}
    >
        Post {capitalizeFirstChar(role)}
    </button>
</div>

<style lang="stylus">
  .message
    display flex
    align-items center
    justify-content space-between
    &.comment
      flex-wrap wrap
    .status
      body-2()
      color brand-lighter-navy
    &.reply
      margin-left 72px
      align-items flex-start
      gap 16px
      margin-top 24px
      position relative
      textarea
        margin-bottom 0
      .status
        position absolute
        right 142px
        bottom 4px
        font-size 8px
        line-height 12px
      .btn
        white-space nowrap
</style>
