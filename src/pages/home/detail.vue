<template>
  <div class="mt-3">
    <div class="card">
      <div class="card-header">
        <router-link to="/" class="btn btn-warning">Back</router-link>
      </div>
      <div class="card-body">
          <table class="table table-striped">
              <tbody>
                  <tr>
                      <td>Name</td>
                      <td>: {{ state.data.name }}</td>
                  </tr>
                  <tr>
                      <td>Date of Birth </td>
                      <td>: {{ state.data.date_of_birth }}</td>
                  </tr>
                  <tr>
                      <td>Customer No</td>
                      <td>: {{ state.data.customer_no }}</td>
                  </tr>
                  <tr>
                      <td>Group</td>
                      <td>: {{ state.data.group }}</td>
                  </tr>
                  <tr>
                      <td>Sub Group</td>
                      <td>: {{ state.data.sub_group }}</td>
                  </tr>
                  <tr>
                      <td>Efective Date</td>
                      <td>: {{ state.data.effective_date }}</td>
                  </tr>
                  <tr>
                      <td>Expire Date</td>
                      <td>: {{ state.data.expire_date }}</td>
                  </tr>
                  <tr>
                      <td>Status</td>
                      <td>: {{ state.data.status? 'Active': 'Blocked' }}</td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import dumy from "./dumy";
export default {
  setup() {
    const route = useRoute();
    const state = reactive({
        data: {
        id: 1,
        name: "",
        date_of_birth: "",
        customer_no: "",
        group: "",
        sub_group: "",
        effective_date: "",
        expire_date: "",
        status: false,
      },
    });
    onMounted(() => {
        const id = route.query.id;
        Object.values(dumy).find((dt) => {
            if (dt.id == id) {
            state.data.id = id;
            state.data.date_of_birth = dt.date_of_birth;
            state.data.name = dt.name;
            state.data.customer_no = dt.customer_no;
            state.data.group = dt.group;
            state.data.sub_group = dt.sub_group;
            state.data.effective_date = dt.effective_date;
            state.data.expire_date = dt.expire_date;
            state.data.status = dt.status;
            }
        });
    })
    return {
        state,
    }
  },
};
</script>