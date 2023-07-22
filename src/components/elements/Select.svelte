<script>
    import {createEventDispatcher} from "svelte";
    import {clickOutside} from "@/scripts/clickOutside.js";
    import IconArrowVr from "@/components/vectors/IconArrowVr.svelte";
    import IconTick from "@/components/vectors/IconTick.svelte";

    export let mode = 'minimal';
    export let label = 'Sort By:'
    export let placeholder = 'Select Option'
    export let value = '';
    export let options = [];

    let open = false;
    const dispatch = createEventDispatcher();
    const toggleDropdown = () => open = !open;
    const selectAndEmit = (val) => {
        dispatch('select', val);
    };
    const handleClickOutside = () => {
        open = false;
    }
</script>

<div
    class="select {mode}" class:open="{open}"
    on:click={() => toggleDropdown()}
    use:clickOutside
    on:outClick={handleClickOutside}
>
    <div class="label">{label} <span>{value || placeholder} <IconArrowVr /></span></div>
    {#if open}
        <div class="options">
            {#each options as option}
                <div class="option" on:click={() => selectAndEmit(option)}>
                    {option} {#if option === value}<IconTick/>{/if}
                </div>
            {/each}
        </div>
    {/if}
</div>

<style lang="stylus">
  .select
    padding 16px 18px
    cursor pointer
    position relative
    .label
      heading-4()
      font-weight 400
      span
        heading-4()
      :global(.icon-arrow-vr)
        margin-left 10px
        transition transform 0.3s ease-in-out
        transform rotate(180deg)
    &.open
      .label
        :global(.icon-arrow-vr)
          transform rotate(0deg)
    .options
      position absolute
      left 18px
      top: 100%
      box-shadow 0 10px 40px -7px rgba(55, 63, 104, 0.350492)
      border-radius 10px
      overflow hidden
      z-index 1
      .option
        color brand-lighter-navy
        background-color brand-white
        padding: 12px 24px
        white-space nowrap
        min-width 255px
        box-sizing border-box
        user-select none
        display flex
        align-items center
        justify-content space-between
        &:hover
          color brand-purple
        &:not(:last-child)
          border-bottom 1px solid brand-grey
    &.regular
      padding 0
      margin-bottom 24px
      &.open
        .label
          border 1px solid brand-blue
      .label
        padding 13px 24px
        background-color brand-light-grey
        border-radius 5px
        position relative
        border 1px solid transparent
        transition border-color 0.3s ease-in-out
        span
          body-2()
          font-weight 400
          color brand-light-navy
          :global(.icon-arrow-vr)
            position absolute
            top calc(50% - 3.5px)
            right 13px
          :global(.icon-arrow-vr path)
            stroke brand-blue
      .options
        top calc(100% + 16px)
        left 0
        width 100%

  @media screen and (max-width: 570px)
    .select
      &.regular
        .label
          padding 12px 16px
</style>
