import { useState } from "react";
import { useDispatch } from "react-redux";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

import ErrorDialog from "../components/ErrorDialog";
import { startTest } from "../testSlice";
import {
  useGetTestTakerByEmailQuery,
  useCreateTestInstanceMutation,
} from "../../../app/services/ecats";

const validateTestTaker = (data, email, code) => {
  if (!data) console.log("No Test Taker found.");
  if (!data.email) console.log("No email found.");
  if (!data.code) console.log("No code found.");

  // function isValidUser(userInfo) {
  //   return userInfo.email === email;
  // }
  // function isValidCode(userInfo) {
  //   return userInfo.code === code;
  // }
  // function isActiveUser(userInfo) {
  //   return userInfo.active;
  // }
  // console.log(data);
  // if (!isValidUser(data)) {
  //   console.log("Invalid email.");
  //   return "The email address entered does not exist in our system.";
  // } else if (!isValidCode(data)) {
  //   console.log("Invalid code.");
  //   return "The code entered is not correct.";
  // } else if (!isActiveUser(data)) {
  //   console.log("User is not active.");
  //   return "The email address entered is no longer active.";
  // } else {
  //   console.log("User is all good.");
  //   return "No error.";
  // }
  if (data.email !== email)
    throw "The email address entered does not exist in our system.";
  else if (data.code !== code) throw "The code entered is not correct.";
  else if (!data.active) throw "The email address entered is no longer active.";
  else return true;
};

const validationSchema = yup.object({
  email: yup
    .string("Enter your email.")
    .email("Enter a valid email address.")
    .required("Email is required."),
  code: yup
    .string("Enter your 6-digit code.")
    .matches(/^[0-9]{6}$/, "Code must be a 6-digit number.")
    .required("Code is required."),
});

export default function StartPage() {
  const dispatch = useDispatch();
  const [isErrorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorDialogText, seterrorDialogText] = useState("");

  const [createTestInstance] = useCreateTestInstanceMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      code: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      try {
        validateTestTaker(data, values.email, values.code);
        let startedAt = new Date().toISOString();
        const testInstance = await createTestInstance({
          testTaker: data.id,
          startedAt: startedAt,
        }).unwrap();
        console.log(testInstance.id);
        dispatch(
          startTest({
            testTakerID: data.id,
            testTakerEmail: data.email,
            testInstance: testInstance.id,
          })
        );
      } catch (error) {
        setErrorDialogOpen(true);
        seterrorDialogText(error);
      }
    },
  });

  const { data } = useGetTestTakerByEmailQuery(formik.values.email, {
    skip: formik.values.email === "",
  });

  return (
    <Container>
      <Typography variant="h1">
        ECATSダイアグノスティックテスト
        <br />
        へようこそ
      </Typography>
      <Box textAlign="center" mx="auto" maxWidth="40ch">
        <Typography variant="body1">
          ECATS（英語コミュニケーション能力評価試験システム）は英語でのコミュニケーション能力を測定するシステムです。
          <br />
          CFERの評価基準で英語力を明確に評価します。
        </Typography>
        <Typography variant="body1">
          このダイアグノスティックテストでは、主に正確性や語彙力を測定します。
        </Typography>
        <Typography variant="body1" mb="0">
          問題タイプは4種類あります。
        </Typography>
        <Typography variant="body1" mt="0" pl="1rem" lineHeight="2.5">
          Type 1: 正しい答えを選んで文を完成させなさい。
          <br />
          Type 2: 正しい語句を選んで文を完成させなさい。
          <br />
          Type 3: 文を完成するのに適切ではない答えを選びなさい。
          <br />
          Type 4: (&nbsp;&nbsp;&nbsp;) 内の語句の正しい位置を選びなさい。
        </Typography>
        <Typography variant="body1">
          お間違えのないよう、回答する前に必ず出題されている問題の説明をお読みください。
          <br />
          テストは全部で30問です。
          <br />
          各問題の制限時間は30秒ですので、30秒以内に正しい答えにクリックしてください。
          <br />
          ※ 次の問題に進むと、前の問題には戻れません。
          <br />※ テストを開始すると、一旦停止またはテストの再開はできません。
        </Typography>
        <Typography variant="body1">
          準備ができましたら、「開始する」にクリックしてください。
          <br />
          「開始する」にクリックしますと、直ちに1問目のタイマーがスタートします。
        </Typography>
        {process.env.REACT_APP_DEMO_MODE === "true" && (
          <Alert severity="info">
            <AlertTitle>For Demo Use:</AlertTitle>
            <Typography variant="body1">
              Email: demo@example.com
              <br />
              Code: 123456
            </Typography>
          </Alert>
        )}
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="code"
            name="code"
            label="Code"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            value={formik.values.code}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.code && Boolean(formik.errors.code)}
            helperText={formik.touched.code && formik.errors.code}
          />
          <Button variant="outlined" type="Submit">
            開始する
          </Button>
        </form>
      </Box>
      <ErrorDialog
        open={isErrorDialogOpen}
        onClose={() => setErrorDialogOpen(false)}
        errorText={errorDialogText}
      />
    </Container>
  );
}
