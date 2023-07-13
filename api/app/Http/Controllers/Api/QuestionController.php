<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Actions\Question\QuestionAction;
use App\Http\Presenters\Question\QuestionArrayPresenter;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class QuestionController extends ApiController
{
    public function getAll(
        QuestionAction $action,
        QuestionArrayPresenter $presenter
    ): JsonResponse
    {
        $response = $action->getAllQuestions();

        return $this->successResponse(
            $presenter->presentCollection($response)
        );
    }

    public function getBySlug(
        Request $request,
        QuestionAction $action,
        QuestionArrayPresenter $presenter
    ): JsonResponse
    {
        $questionSlug = $request->route('questionSlug');
        $response = $action->getQuestionBySlug($questionSlug);

        return $this->successResponse(
            $presenter->present($response)
        );
    }
}
