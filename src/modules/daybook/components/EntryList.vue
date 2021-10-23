<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2 pb-2">
            <input 
                type="text"
                class="form-control round"
                placeholder="Buscar entradas"
                v-model="term"
                >
        </div>

        <div class="entry-scrollarea">
            <Entry
            v-for="item in entriesByTerm"
            :key="item"
            />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapGetters } from 'vuex'


export default {
    components:{
        Entry: defineAsyncComponent( () => import('./Entry.vue') )
    },
    computed:{
        ...mapGetters('journal', [ 'getEntriesByTerm' ]),
        entriesByTerm() {
            return this.getEntriesByTerm( this.term )
        }
    },
    data(){
        return{
            term: ''
        }
    }
}
</script>

<style lang="scss"  scoped>

.entry-list-container{
    border-right: 1px solid #d1d7dc;
    height: calc( 100vh - 56px);
}

.entry-scrollarea{
    height: calc( 100vh - 110px);
    overflow: scroll;
}

.round{
    border-radius: 30px;
}

</style>