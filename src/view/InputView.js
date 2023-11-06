import { Console } from "@woowacourse/mission-utils";
import InputValidator from "../utils/validator.js";

const InputView = {
  async purchaseAmount(callback) {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return input;
  },
  async lottoWinningNumber() {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    return input;
  },
  async lottoBonusNumber() {
    const input = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    return input;
  },
};

export default InputView;
