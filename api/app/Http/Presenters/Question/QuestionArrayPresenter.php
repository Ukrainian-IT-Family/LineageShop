<?php

declare(strict_types=1);

namespace App\Http\Presenters\Question;

use App\Models\Question;
use Illuminate\Support\Collection;
use App\Http\Presenters\CollectionAsArrayPresenterInterface;

final class QuestionArrayPresenter implements CollectionAsArrayPresenterInterface
{
    public function present(Question $question): array
    {
        return [
            'id' => $question->getID(),
            'sort' => $question->getSort(),
            'title' => $question->getTitle(),
            'description' => $question->getDescription(),
            'slug' => $question->getSlug(),
            'created' => $question->getCreated()
        ];
    }

    public function presentCollection(Collection $questions): array
    {
        return $questions->map(fn (Question $question) => $this->present($question))->all();
    }
}
