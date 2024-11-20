/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('job_posting',(table)=>{
        table.increments('id').primary()
        table.string("company_name")
        table.string("location")
        table.string("degree")
        table.string("branch")
        table.string("employeer_name")
        table.integer("number_positions")
        table.string("job_role")
        table.text("job_description")
        table.text("required_skills")
        table.enum("employement_type",["Internship","Full_time"])
        table.string("salary")
        table.date("join_before")
        table.dateTime("expiry")
        
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("job_posting")
  
};



