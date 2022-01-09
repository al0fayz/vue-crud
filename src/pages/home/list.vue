<template>
  <div class="mt-3">
    <router-link to="/create" class="btn btn-info float-right my-2"
      >Add Data</router-link
    >
    <div class="card">
      <div class="card-header">
        <form>
          <div class="row">
            <div class="col-sm-3">
              <div class="row mb-2">
                <label for="staticEmail" class="col-sm-4 col-form-label"
                  >Search Keyword</label
                >
                <div class="col-sm-8">
                  <input type="text" class="form-control-sm" />
                </div>
              </div>
              <div class="row mb-2">
                <label for="staticEmail" class="col-sm-4 col-form-label"
                  >Minimum Date</label
                >
                <div class="col-sm-8">
                  <input type="date" class="form-control-sm" />
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="row mb-2">
                <label for="staticEmail" class="col-sm-4 col-form-label"
                  >Category</label
                >
                <div class="col-sm-8">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div class="row mb-2">
                <label for="staticEmail" class="col-sm-4 col-form-label"
                  >Maximum Date</label
                >
                <div class="col-sm-8">
                  <input type="date" class="form-control-sm" />
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="row mb-2">
                <label for="staticEmail" class="col-sm-4 col-form-label"
                  >Status</label
                >
                <div class="col-sm-8">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div class="row mb-2">
                <label for="staticEmail" class="col-sm-4 col-form-label"
                  >Date</label
                >
                <div class="col-sm-8">
                  <input type="date" class="form-control-sm" />
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <button type="submit" class="btn btn-success">Search</button>
            </div>
          </div>
        </form>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Customer Number</th>
              <th scope="col">Group</th>
              <th scope="col">Sub Group</th>
              <th scope="col">Efective Date</th>
              <th scope="col">Expire Date</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dt in state.data" :key="dt.id">
              <th scope="row">{{ dt.id }}</th>
              <td>{{ dt.name }}</td>
              <td>{{ dt.date_of_birth }}</td>
              <td>{{ dt.customer_no }}</td>
              <td>{{ dt.group }}</td>
              <td>{{ dt.sub_group }}</td>
              <td>{{ dt.effective_date }}</td>
              <td>{{ dt.expire_date }}</td>
              <td>{{ dt.status ? "Active" : "Blocked" }}</td>
              <td>
                <router-link :to="'/update?id=' + dt.id" class="text-info"
                  >Update</router-link
                >
                ||
                <router-link :to="'/detail?id=' + dt.id" class="text-success"
                  >Detail</router-link
                >
                ||
                <a @click="deleteData(dt.id)" class="text-danger">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import dumy from "./dumy.js";
import { useVueSweetAlert2 } from "../../useVueSweetAlert2";

export default {
  setup() {
    const $swal = useVueSweetAlert2();
    const state = reactive({
      data: dumy,
    });
    const deleteData = (id) => {
      $swal
        .fire({
          text: "Apakah Anda yakin Akan Menghapus?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Ya",
          cancelButtonText: "Tidak",
          confirmButtonColor: "#b50b1b",
        })
        .then((result) => {
          if (result.isConfirmed) {
            var index = state.data
              .map((x) => {
                return x.id;
              })
              .indexOf(id);

            state.data.splice(index, 1);
          }
        });
    };
    return {
      state,
      deleteData,
    };
  },
};
</script>