const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http')
const expect = require('chai').expect;
chai.use(chaiHttp);
describe('Authorization', function () {
  it('It should register successfully', async function () {
    let res = await chai.request(app).post('/api/register').send({
      name: 'lola',
      email: 'lola@email.test',
      password: 'password',
    });
    expect(res.status).to.equal(200);
  });
  it.only('It should login in successfully', function () {
    this.timeout(15000);
    chai
      .request(app)
      .get('/api/login')
      .send({ email: 'lola@email.test', password: 'password' })
      .then(function(res){
          expect(res).to.have.status(200);
      })
      .catch(function(err){
          throw err;
      })
  });
});