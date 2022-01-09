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
import { reactive } from "vue";
import { useRouter } from "vue-router";
import dumy from "./dumy";
import { useVueSweetAlert2 } from "../../useVueSweetAlert2";

export default {
  setup() {
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

    const saveData = async () => {
      const dt = {
        id: dumy.length + 1,
        name: state.form.name,
        date_of_birth: state.form.date_of_birth,
        customer_no: state.form.customer_no,
        group: state.form.group,
        sub_group: state.form.sub_group,
        effective_date: state.form.effective_date,
        expire_date: state.form.expire_date,
        status: state.form.status,
      };
      dumy.push(dt);
      $swal.fire({
        icon: "success",
        title: "Success",
        text: "Data Berhasil di Simpan!",
      });
      router.push({ path: "/" });
    };
    return {
      state,
      saveData,
    };
  },
};
</script>