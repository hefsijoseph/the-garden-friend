<template>
  <form @submit.prevent="handleSubmit">
    <label>Email</label>
    <input type="email" v-model="email" required />
    <label>Password</label>
    <input type="password" v-model="password" required />
    <p class="error">{{ passwordErr }}</p>
       <label>Role</label>
    <select v-model="role">
      <option value="designer">Web Designer</option>
      <option value="developer">Web Developer</option>
    </select>

    <label>Skills</label>
    <!-- added alt modifier so , key does not output -->
    <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />

    <div v-for="skill in skills" :key="skill" class="pill bg-secondary-light-4 text-black">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>
    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>Accept terms and conditions</label>
    </div>

<div class="submit">
  <button>Submit</button>
</div>
    <!-- <div>
      <input type="checkbox" value="shaun" v-model="names">
      <label>Shaun</label>
    </div>

    <div>
      <input type="checkbox"  value="mario" v-model="names">
      <label>Mario</label>
    </div>

    <div>
      <input type="checkbox" value="luigi" v-model="names">
      <label>Luigi</label>
    </div> -->
  </form>
  <p>Email - {{ email }}</p>
  <p>Password - {{ password }}</p>
  <p>Role - {{ role }}</p>
  <p>Terms accepted {{ terms }}</p>
  <Footer  :footerMessage="footerMessage"/>
</template>

<script>
import Footer from '../components/Footer.vue'

export default {
  components: { Footer },
  data() {
    return {
      email: "",
      password: "",
      role: "",
      tempSkill: "",
      skills: [],
      terms: false,
      names: [],
      passwordErr: '',
      footerMessage: 'Copyright 2025 Designed & Created by Hefsi'
    };
  },

  methods: {
    addSkill(e) {
      console.log(e);
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },

    deleteSkill(skill) {
      this.skills=this.skills.filter((item) => {
        return skill !== item;
      });
    },

    handleSubmit(){
      // validate password
      this.passwordErr = this.password.length > 5 ? '': 
      'password must be at least 6 characters long'

      if(!this.passwordErr){
        console.log('Email',this.email)
        console.log('Password',this.password)
        console.log('Role',this.role)
        console.log('skills',this.skills)
        console.log('Accepted terms and condition',this.terms)
      }
    }
  },
};
</script>

<style>
form {
  max-width: 620px;
  margin: 30px auto;
  background: #eee;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  /* color: #aaa; */
    color: inherit;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: .75em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bolder;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 3px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

.submit button{
  background: #1ac888;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit{
  text-align: center;
}

.error{
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
