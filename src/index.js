import 'dotenv/config';
import express from 'express';
import ApiDocs from './docs/index';

const app = express();

//swagger 적용
function getSwaggerOption() {
  const apiDocs = new ApiDocs();
  apiDocs.init();

  return apiDocs.getSwaggerOption();
}
const { swaggerUI, specs, setUpoption } = getSwaggerOption();
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs, setUpoption));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`포트: ${PORT} 서버 가동 시작`);
});
