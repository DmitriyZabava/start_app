import "@testing-library/jest-dom";
import "regenerator-runtime/runtime";

import { configure } from "@testing-library/react";

// Настройка Testing Library
configure({ testIdAttribute: "data-test" });