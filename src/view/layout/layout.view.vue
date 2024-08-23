<template>
  <div class="">
    <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2">
      <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Header</q-toolbar-title>
          <q-btn flat @click="rightDrawer = !rightDrawer" round dense icon="paid" />
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :mini="miniState" @mouseover="miniState = false"
        @mouseout="miniState = true" :width="200" :breakpoint="500" bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-white-3'">
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding>
            <q-expansion-item label="Food" icon="restaurant_menu" expand-separator default-opened>
              <!-- Subcategories under Food -->
              <q-list>
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="apple" />
                  </q-item-section>
                  <q-item-section>
                    Fruits
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="spa" />
                  </q-item-section>
                  <q-item-section>
                    Vegetables
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="local_dining" />
                  </q-item-section>
                  <q-item-section>
                    Meals
                  </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Inbox
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Inbox
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Star
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Send
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>
              <q-item-section>Settings</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>
              <q-item-section>Help</q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="info" />
              </q-item-section>
              <q-item-section>About</q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <!-- Right Sidebar -->
      <q-drawer v-model="rightDrawer" side="right" show-if-above :mini="miniStateRight"
        @mouseover="miniStateRight = false" @mouseout="miniStateRight = true" :width="400" :breakpoint="500" bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-white-3'">
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>
              <q-item-section>Settings</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>
              <q-item-section>Help</q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="info" />
              </q-item-section>
              <q-item-section>About</q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <router-view></router-view>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      drawer: ref(false),
      miniState: ref(true),
      rightDrawer: ref(false),
      miniStateRight: ref(true)
    }
  }
}
</script>
