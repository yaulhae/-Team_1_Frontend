// 아이디 체크
// 중복확인
// 영소문, 숫자 혼합 3~12자
export const usernameCheck = (userId) => {
  let userIdRegex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{3,12}$/;

  return userIdRegex.test(userId);
};

// 닉네임 체크
// 중복 확인
// 길이: 최소 3글자, 10자 제한, 문자 숫자만 가능.
export const nicknameCheck = (userNick) => {
  let userNickRegex = /^(?=.*[가-힣a-z?=.*\d])[가-힣a-z\d?=.*\d]{3,10}$/;

  return userNickRegex.test(userNick);
};

// *비밀번호
// 길이: 4~12자 제한
// 영대소문숫자특수문자 혼합
export const passwordCheck = (userPwd) => {
  let userPwdRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{4,12}$/;

  return userPwdRegex.test(userPwd);
};
