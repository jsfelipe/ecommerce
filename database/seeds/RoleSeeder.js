'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Role = use('Role')

class RoleSeeder {
  async run() {

    const admin = new Role()
    admin.name = 'Admin'
    admin.slug = 'admin'
    admin.description = 'Administrador'
    await admin.save()

    const manager = new Role()
    manager.name = 'Gerente'
    manager.slug = 'manager'
    manager.description = 'Gerente'
    await manager.save()

    const cliente = new Role()
    cliente.name = 'Cliente'
    cliente.slug = 'cliente'
    cliente.description = 'Cliente'
    await cliente.save()



  }
}

module.exports = RoleSeeder
