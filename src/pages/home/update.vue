<template>
  <div class="mt-3">
    <div class="card">
      <div class="card-header">
        <router-link to="/" class="btn btn-warning">Back</router-link>
      </div>
      <div class="card-body">
        <form @submit="saveData">
          <div class="row mb-2">
            <label for="staticEmail" class="col-sm-4 col-form-label"
              >Name</label
            >
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                v-model="state.form.name"
              />
            </div>
          </div>
          <div class="row mb-2">
            <label for="staticEmail" class="col-sm-4 col-form-label"
              >Date of Birth</label
            >
            <div class="col-sm-8">
              <input
                type="date"
                class="form-control"
                v-model="state.form.date_of_birth"
              />
            </div>
          </div>
          <div class="row mb-2">
            <label for="staticEmail" class="col-sm-4 col-form-label"
              >Customer no</label
            >
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                v-model="state.form.customer_no"
              />
            </div>
          </div>
          <div class="row mb-2">
            <label for="staticEmail" class="col-sm-4 col-form-label"
              >Group</label
            >
            <div class="col-sm-8">
              <select class="form-select" v-model="state.form.group">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
          </div>
          <div class="row mb-2">
            <label for="staticEmail" class="col-sm-4 col-form-label"
              >Sub Group</label
            >
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                v-model="state.form.sub_group"
              />
            </div>
          </div>
          <div class="row mb-2">
            <label for="staticEmail" class="col-sm-4 col-form-label"
              >Efective Date</label
            >
            <div class="col-sm-8">
              <input
                type="date"
                class="form-control"
                v-model="state.form.effective_date"
              />
            </div>
          </div>
          <div class="row mb-2">
            <label for="staticEmail" class="col-sm-4 col-form-label"
              >Expire Date</label
            >
            <div class="col-sm-8">
              <input
                type="date"
                class="form-control"
                v-model="state.form.expire_date"
              />
            </div>
          </div>
          <div class="row mb-2">
            <label for="staticEmail" class="col-sm-4 col-form-label"
              >Status</label
            >
            <div class="col-sm-8">
              <select class="form-select" v-model="state.form.status">
                <option :value="true">Active</option>
                <option :value="false">Block</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-success">Update Data</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import dumy from "./dumy";
import { useVueSweetAlert2 } from "../../useVueSweetAlert2";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const $swal = useVueSweetAlert2();
    const state = reactive({
      form: {
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
          state.form.id = id;
          state.form.date_of_birth = dt.date_of_birth;
          state.form.name = dt.name;
          state.form.customer_no = dt.customer_no;
          state.form.group = dt.group;
          state.form.sub_group = dt.sub_group;
          state.form.effective_date = dt.effective_date;
          state.form.expire_date = dt.expire_date;
          state.form.status = dt.status;
        }
      });
    });
    const saveData = async () => {
      await dumy.map((dt) => {
        if(dt.id == state.form.id){
          dt.date_of_birth = state.form.date_of_birth;
          dt.name = state.form.name;
          dt.customer_no = state.form.customer_no;
          dt.group = state.form.group;
          dt.sub_group = state.form.sub_group;
          dt.effective_date = state.form.effective_date;
          dt.expire_date = state.form.expire_date;
          dt.status = state.form.status;
        }
      })
      $swal.fire({
        icon: "success",
        title: "Success",
        text: "Data Berhasil di Rubah!",
      });
      router.push({ path: '/'})
    };
    return {
      state,
      saveData,
    };
  },
};
</script>