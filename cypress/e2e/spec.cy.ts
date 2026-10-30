describe('CVs Test', () => {
  it('Test header component', () => {
    cy.visit('/')
    cy.contains('Carlos de la Cruz')
  })
  it('Test work-experience component', () => {
    cy.visit('/')
    cy.contains('Database developer')
    cy.contains('Backend Develop')
  })
  it('Test education component', () => {
    cy.visit('/')
    cy.contains('Tecnico en programacion')
  })
  it('Test languages component', () => {
    cy.visit('/')
    cy.contains('Español')
  })
  it('Test skills component', () => {
    cy.visit('/')
    cy.contains('Modelado de base de datos')
    cy.contains('Trabajo en equipo y colaboracion')
  })
  it('Test certificatees component', () => {
    cy.visit('/')
    cy.contains('Fundamentos de Metodologías Ágiles y Scrum')
    cy.contains('Modelado y Administración de Bases de Datos PostgreSQL')
  })
  it('Test interests component', () => {
    cy.visit('/')
    cy.contains('Videojuegos de simulación y estrategia')
    cy.contains('Inteligencia artificial aplicada a la productividad')
  })
})