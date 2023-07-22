<script>
    import {createEventDispatcher} from "svelte";
    import IconLightBulb from "@/components/vectors/IconLightBulb.svelte";
    import Select from "@/components/elements/Select.svelte";
    import {singularOrPlural} from "@/scripts/helper.js";
    import {navigateToFeedbackCreatePage} from "@/scripts/commonActions.js";

    export let sortValue = '';
    export let sortOptions = '';
    export let feedbackCount = 0;
    const dispatch = createEventDispatcher();
    function sortFeedbacks(event) {
        dispatch('sortFeedbacks', event.detail);
    }
</script>

<header>
    <div class="feedback-info">
        <IconLightBulb />
        <h3>{singularOrPlural(feedbackCount, 'Suggestion', 'Suggestions')}</h3>
        <div class="sort-by">
            <Select value="{sortValue}" options="{sortOptions}" on:select={sortFeedbacks}/>
        </div>
    </div>
    <button class="btn primary" on:click={() => navigateToFeedbackCreatePage()}>+ Add Feedback</button>
</header>

<style lang="stylus">
  header
    background-color brand-navy
    padding 14px 16px
    margin-bottom 24px
    border-radius 10px
    display flex
    align-items center
    justify-content space-between
    color brand-white
    .feedback-info
      padding-left 10px
      display flex
      align-items center
      :global(.icon-light-bulb)
        margin-right 16px
      h3
        heading-3()
        min-width 150px
      .sort-by
        :global(.select)
          padding: 12px 18px
  @media screen and (max-width: 690px)
    header
      position sticky
      top 75px
      z-index 1
      border-radius 0
  @media screen and (max-width: 570px)
    header
      padding 14px 24px
      .feedback-info
        padding-left 0
        :global(.icon-light-bulb),
        h3
          display none
        .sort-by
          :global(.select)
            padding-left 0
            -webkit-tap-highlight-color transparent
</style>
