<script>
    import {onDestroy} from "svelte";
    import ProductBanner from "@/components/sidebar/ProductBanner.svelte";
    import Categories from "@/components/sidebar/Categories.svelte";
    import Roadmap from "@/components/sidebar/Roadmap.svelte";
    export let selectedCategory;

    let drawerOpen = false;
    let backdropVisible = false;
    let backdropHiding = true;
    let backdropShowing = false;
    function toggleDrawer(event) {
        drawerOpen = event.detail;
        if (drawerOpen) {
            showBackdrop();
            document.body.style.overflowY = 'hidden';
        } else {
            hideBackdrop();
            document.body.removeAttribute('style');
        }
    }
    function showBackdrop() {
        backdropVisible = true;
        setTimeout(() => {
            backdropShowing = true;
            backdropHiding = false;
        }, 0);
    }
    function hideBackdrop() {
        backdropHiding = true;
        backdropShowing = false;
        setTimeout(() => {
            backdropVisible = false;
        }, 300);
    }
    function releaseOverflow() { // applied from homepage in mobile view;
        if (drawerOpen) {
            document.body.removeAttribute('style');
        }
    }

    onDestroy(() => {
        releaseOverflow();
    })
</script>

<div class="sidebar-wrapper" role="navigation">
    <ProductBanner menuOpen="{drawerOpen}" on:toggleBurgerMenu={toggleDrawer}/>
    <div
        class="backdrop {backdropVisible ? 'visible' : 'hidden'}"
        class:fade-in={backdropShowing} class:fade-out={backdropHiding}
        on:click={() => toggleDrawer({ detail: false })}
    ></div>
    <div class="drawer" class:open={drawerOpen}>
        <Categories selectedCategory="{selectedCategory}" on:categorySelection />
        <Roadmap />
    </div>
</div>

<style lang="stylus">
  .sidebar-wrapper
    width 100%
    max-width 255px
    .backdrop
      display none
      position fixed
      top 0
      left 0
      width 100%
      height 100%
      background-color alpha(brand-black, 0.5)
      transition opacity 0.3s ease-in-out
      z-index 2
      &.hidden
        display none
      &.visible
        display block
      &.fade-out
        opacity 0
      &.fade-in
        opacity 1
    .drawer
      display contents
  @media screen and (max-width: 991px)
    .sidebar-wrapper
      display flex
      gap 10px
      align-items stretch
      max-width unset
      :global(.product-banner),
      :global(.tag-list),
      :global(.roadmap-wrapper)
        flex 1 1 0
  @media screen and (max-width: 690px)
    .sidebar-wrapper
      display block
      .drawer
        display block
        width calc(100% - 110px)
        height 100%
        padding 24px
        background-color brand-grey
        position fixed
        z-index 10
        right -100%
        top 75px
        transition right 0.3s ease-in-out
        &.open
          right 0
</style>
