type StrictProgrammingLanguage = 'JavaScript' | 'C++' | 'Rust';
type ProgrammingLanguage = StrictProgrammingLanguage | (string & {})

interface Project {
  programmingLanguage: ProgrammingLanguage;
  // ...
}

const myProject: Project = {
  programmingLanguage: 'TypeScript', // valid assignment
  // ...
}

interface StrictProject {
  programmingLanguage: StrictProgrammingLanguage;
}

const myStrictProject: StrictProject = {
  programmingLanguage: 'TypeScript', // not valid assignment
  // ...
}