<script>
    import {createEventDispatcher} from "svelte";
    import IconLightBulb from "@/components/vectors/IconLightBulb.svelte";
    import Select from "@/components/elements/Select.svelte";
    const dispatch = createEventDispatcher();
    export let sortValue = '';
    export let sortOptions = '';
    function sortFeedbacks(event) {
        dispatch('sortFeedbacks', event.detail);
    }
</script>

<header>
    <div class="feedback-info">
        <IconLightBulb />
        <h3>0 Suggestions</h3>
        <div class="sort-by">
            <Select value="{sortValue}" options="{sortOptions}" on:select={sortFeedbacks}/>
        </div>
    </div>
    <button class="btn primary">+ Add Feedback</button>
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
        :global(#icon-light-bulb)
          margin-right 16px
        h3
          heading-3()
</style>
