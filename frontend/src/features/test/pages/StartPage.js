import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { startTest } from "./testSlice";

export default function StartPage() {
  const dispatch = useDispatch();

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
          Type 4: (　) 内の語句の正しい位置を選びなさい。
        </Typography>

        <Typography variant="body1">
          お間違えのないよう、回答する前に必ず出題されている問題の説明をお読みください。
          <br />
          テストは全部で30問です。
          <br />
          各問題の制限時間は30秒ですので、30秒以内に正しい答えにクリックしてください。
          <br />
          ※　次の問題に進むと、前の問題には戻れません。
          <br />
          ※　テストを開始すると、一旦停止またはテストの再開はできません。
        </Typography>

        <Typography variant="body1">
          準備ができましたら、「開始する」にクリックしてください。
          <br />
          「開始する」にクリックしますと、直ちに1問目のタイマーがスタートします。
        </Typography>

        <Button variant="outlined" onClick={() => dispatch(startTest())}>
          開始する
        </Button>
      </Box>
    </Container>
  );
}
