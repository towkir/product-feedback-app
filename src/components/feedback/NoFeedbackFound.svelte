<script>
    import IllustrationDetective from "@/components/vectors/IllustrationDetective.svelte";
    import {navigateToFeedbackCreatePage} from "@/scripts/commonActions.js";
</script>

<div class="no-feedback-found">
    <div class="wrapper">
        <IllustrationDetective />
        <h2>There is no feedback yet.</h2>
        <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
        <p><button class="btn primary" on:click={() => navigateToFeedbackCreatePage()}>+ Add Feedback</button></p>
    </div>
</div>

<style lang="stylus">
    .no-feedback-found
      display flex
      align-items center
      justify-content center
      background-color brand-white
      border-radius 10px
      .wrapper
        width 410px
        margin 110px auto
        text-align center
        :global(svg)
          margin-bottom 54px
        h2
          heading-1()
          color brand-light-navy
          margin-bottom 16px
        p
          body-1()
          color brand-lighter-navy
          &:first-of-type
            margin-bottom 48px
</style>
