<script>
    import {singularOrPlural, capitalizeFirstChar} from "@/scripts/helper.js";

    export let role = 'comment'; // or 'reply'
    const characterLimit = 250;
    let comment = '';
    $: remainingCharacter = comment.length <= characterLimit ? characterLimit - comment.length : 0;
</script>

<div class="message {role}">
    <!-- svelte-ignore a11y-autofocus -->
    <textarea
        bind:value={comment}
        class="input"
        autofocus
        class:error={comment.length > characterLimit}
        placeholder="Type your {role} here"></textarea>
    <span class="status">
        {#if role === 'comment'}
            {singularOrPlural(remainingCharacter, 'character', 'characters')} left
        {:else}
            {comment.length} / {characterLimit}
        {/if}
    </span>
    <button disabled="{(comment.length > characterLimit) || null}" class="btn primary">Post {capitalizeFirstChar(role)}</button>
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
