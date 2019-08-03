import axios from "axios";

export default {
    // Add New Profile
    addProfile: function(profile) {
      return axios.post("/api/profile", profile);
    },
    // Edit Profile
    editProfile: function(id) {
      return axios.put("/api/profile/" + id);
    },
    // All profiles in home page
    getProfiles: function() {
      return axios.get("/api/profiles");
    },
    //Specific Profile with id
    specificProfile: function(id) {
      return axios.get("/api/profile", + id);
    }
};
