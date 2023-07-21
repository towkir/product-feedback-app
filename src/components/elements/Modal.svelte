<script>
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();

    export let id;
    export let variant = 'primary';
    export let title = 'Modal Title';
    export let noFooter = false;
    export let okText = 'Okay';
    export let canPressOk = true;
    export let closeOnEsc = true;
    export let closeOnBackdrop = true;

    let visible = false;
    let hiding = true;
    let showing = false;

    function show() {
        visible = true;
        setTimeout(() => {
            showing = true;
            hiding = false;
        }, 0);
        addEventListenerForCloseOnEsc();
        dispatch('open');
    }
    function hide() {
        hiding = true;
        showing = false;
        setTimeout(() => {
            visible = false;
            dispatch('close');
        }, 300);
        removeEventListenerForCloseOnEsc();
    }
    function onOkay() {
        dispatch('ok');
    }
    function handleEsc(e) {
        if (e.keyCode === 27) {
            hide();
        }
    }
    function handleCloseOnBackdrop(event) {
        if (event.target && event.target.classList.contains('modal-backdrop')
            && closeOnBackdrop) {
            hide();
        }
    }
    function addEventListenerForCloseOnEsc() {
        if (closeOnEsc) {
            document.addEventListener('keydown', handleEsc);
        }
    }
    function removeEventListenerForCloseOnEsc() {
        if (closeOnEsc) {
            document.removeEventListener('keydown', handleEsc);
        }
    }
</script>

<svelte:window
    on:modal::show={(event) => {
        if (event.detail === id) {
            show();
        }
    }}
    on:modal::hide={(event) => {
        if (event.detail === id) {
            hide();
        }
    }}
/>

<div
    class="modal-backdrop {visible ? 'visible' : 'hidden'}"
    class:fade-in={showing}
    class:fade-out={hiding}
    on:click={handleCloseOnBackdrop}
>
    <div
        class="modal {variant}"
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
    >
        <div id="modal-title" class="modal-header">
            <slot name="header">
                {title}
            </slot>
        </div>
        <div id="modal-description" class="modal-body">
            <slot name="body">
                Modal Body
            </slot>
        </div>
        {#if !noFooter}
            <div class="modal-footer">
                <slot name="footer">
                    <div class="buttons">
                        <button class="btn link" on:click={() => hide()}>Cancel</button>
                        <button
                            class="btn {variant || ''}"
                            on:click={() => onOkay()}
                            disabled="{!canPressOk}"
                        >
                            {okText}
                        </button>
                    </div>
                </slot>
            </div>
        {/if}
    </div>
</div>

<style lang="stylus">
  .modal-backdrop
    position fixed
    top 0
    left 0
    width 100vw
    height 100vh
    z-index 50
    background-color alpha(brand-black, 0.5)
    transition opacity 0.3s ease-in-out

    &.hidden
      display none

    &.visible
      display block

    &.fade-out
      opacity 0

    &.fade-in
      opacity 1

    .modal
      background-color brand-white
      width calc(100% - 40px)
      max-width 480px
      position absolute
      transform translate(-50%, -50%)
      left 50%
      top 50%
      padding 30px
      border-radius 6px
      box-sizing border-box

      .modal-header
        heading-3()
        margin-bottom 24px
        color body-text-color

      .modal-body
        margin-bottom 24px
        body-1()
        color brand-lighter-navy

      .modal-footer
        .buttons
          display flex
          justify-content space-between
          .btn
            width calc(50% - 10px)

      &.primary
        .modal-header
          color brand-purple
      &.red
        .modal-header
          color brand-red
</style>
